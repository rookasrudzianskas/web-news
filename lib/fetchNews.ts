import {gql} from "graphql-request";

export const fetchNews = async (category?: Category | string, keywords?: string, isDynamic?: boolean) => {
    // GraphQL query
    const query = gql`
        query MyQuery(
            $access_key: String!
            $categories: String!
            $keywords: String
        )   {
            myQuery(
                access_key: $access_key
                categories: $categories
                countries: "gb",
                sort: "published_desc",
                keywords: $keywords
            ) {
                data {
                    author
                    category
                    country
                    description
                    image
                    language
                    published_at
                    source
                    title
                    url
                }
                pagination {
                    count
                    limit
                    offset
                    total
                }
            }
        }
    `;
    // Fetch data from API

    const res = await fetch('https://saltillo.stepzen.net/api/pruning-meerkat/__graphql', {
        method: 'POST',
        cache: isDynamic  ? 'no-cache' : 'default',
        next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`
        },
        body: JSON.stringify({
            query,
            variables: {
                access_key: process.env.MEDIASTACK_API_KEY,
                categories: category,
                keywords: keywords,
            },
        })
    })


    console.log("LOADING NEW DATA FROM API");
    console.log("CATEGORY: " + category);
    console.log("KEYWORDS: " + keywords);

    const newsResponse = await res.json();


}


// stepzen import curl http://api.mediastack.com/v1/news?access_key=--your-api-key-here--&sources=business,sports
