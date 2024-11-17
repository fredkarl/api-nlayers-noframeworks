import { FilterPodcastModel } from "../models/filter-podcasts-models";
import { repoPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/http-status";

export const serviceListEpisodes = async (): Promise<FilterPodcastModel> => {
  // define return interface 
  let responseFormat: FilterPodcastModel = {
    statuscode: 0,
    body: []
  };
  
  // get data 
  const data = await repoPodcast();

  // verify has content
  responseFormat.statuscode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;   

  responseFormat.body = data;

  return responseFormat;
}