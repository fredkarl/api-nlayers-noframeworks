import { PodcastModel } from "./podcasts-models";

export interface FilterPodcastModel {
  statuscode: number,
  body: PodcastModel[],
}