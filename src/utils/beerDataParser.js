export async function formatBeersData(data) {
    return data.items.map(item => ({
      id: item.fields.id,
      attributes: {
        name: item.fields.name,
        bitterness: item.fields.bitterness,
        abv: item.fields.abv,
        detail: item.fields.detail,
        description: item.fields.description,
        pair: item.fields.pair,
        cover_url: item.fields.coverUrl.split('/').pop(),
        cover_id: item.fields.cover.sys.id,
        createdAt: item.sys.createdAt,
        updatedAt: item.sys.updatedAt,
        publishedAt: item.sys.createdAt
      }
    }));
  }

  export async function beerDataParser(datos){
    const formattedBeers = await formatBeersData(datos);
    return formattedBeers
  }
