export const transformNewYorkTimesArticles = (articles) => {
    return articles?.map((item, index) => ({
        key: index,
        url: item.web_url,
        urlToImage: item.multimedia[0]?.url
            ? `https://static01.nyt.com/${item.multimedia[0]?.url}`
            : "",
        title: item.headline.main,
        description: item.abstract,
        source: item.source,
    }));
};
  
export const transformGoogleNewsArticles = (articles) => {
    return articles?.map((item, index) => ({
        key: index,
        url: item.url,
        urlToImage: item.image || "",
        title: item.title,
        description: item.description,
        source: item.source.name,
    }));
};

export const filterAndTransformArticles = (articles) => {
    return articles
        ?.filter(
            (item) =>
            item.content !== "[Removed]" && item.description !== "[Removed]"
        )
        .map((item, index) => ({
            key: index,
            url: item.url,
            urlToImage: item.urlToImage || "",
            title: item.title,
            description: item.description,
            source: item.source?.name,
    }));
};