import { animalHospitalAPI, animalPharamcyAPI } from '@/components/map/api/seoul_api';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { api_name, query_key, api_query } = req.body;
  const api_fn = {
    animal_hospital: animalHospitalAPI,
    animal_pharmacy: animalPharamcyAPI,
  };
  try {
    const result = await api_fn[api_name as 'animal_hospital' | 'animal_pharmacy'](`${query_key}${api_query}/1/50/01`);
    res.status(200).send({ data: result.data, query_string: query_key, api_query });
  } catch (err) {
    res.status(500).send(err);
  }
  // const url = req.url!.replace('/api/map/json/', '');
  // const { api_name, query_key, api_query } = req.body;
  // const api_fn = {
  //   animal_hospital: animalHospitalAPI,
  //   animal_pharmacy: animalPharamcyAPI,
  // };
  // try {
  //   const result = await api_fn[api_name as 'animal_hospital' | 'animal_pharmacy'](`${url}/`);
  //   res.status(200).send({ data: result.data, query_string: query_key, api_query });
  // } catch (err) {
  //   res.status(500).send(err);
  // }
}
