import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/listEpisodes-service';
import { serviceFilterEpisodes } from '../services/filterEpisodes-service';
import { ContentType } from '../utils/http-contentType';
import { FilterPodcastModel } from '../models/filter-podcasts-models';

const DEFAULT_CONTENT = {'content-type': ContentType.JSON};

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {

  const content: FilterPodcastModel = await serviceListEpisodes();
  
  response.writeHead(content.statuscode, DEFAULT_CONTENT);
  response.write(JSON.stringify(content.body));
  response.end();
};

export const getFilterEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
  const content: FilterPodcastModel = await serviceFilterEpisodes(request.url);

  response.writeHead(content.statuscode, DEFAULT_CONTENT);
  response.write(JSON.stringify(content.body));
  response.end();
}