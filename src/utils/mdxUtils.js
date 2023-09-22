const PATH_FILES = process.env.API_URL_COVER

export async function getProcessedMdxContent(content){
  return content.replace('/uploads/', `${PATH_FILES}`)
}