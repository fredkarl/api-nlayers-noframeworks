import { repoPodcast } from "../repositories/podcasts-repository"
import { FilterPodcastModel } from "../models/filter-podcasts-models";
import { StatusCode } from "../utils/http-status";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<FilterPodcastModel> => {
  // define return interface 
  let responseFormat: FilterPodcastModel = {
    statuscode: 0,
    body: []
  };

  // get data
  const queryString = podcastName?.split('?p=')[1] || "";
  const data = await repoPodcast(queryString);

  // verify has content
  responseFormat.statuscode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;   

  responseFormat.body = data;

  return responseFormat;
}