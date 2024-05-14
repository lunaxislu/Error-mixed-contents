import { animalHospitalAPI, animalPharamcyAPI } from '@/components/map/api/seoul_api';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { seoulApi } = req.query;
  console.log('🚀 ~ POST ~ seoulApi:', seoulApi);
  const { api_name, query_key, api_query } = req.body;

  const api_fn = {
    animal_hospital: animalHospitalAPI,
    animal_pharmacy: animalPharamcyAPI,
  };
  try {
    const result = await api_fn[api_name as 'animal_hospital' | 'animal_pharmacy'](
      `${seoulApi![2]}/${seoulApi![3]}/${seoulApi![4]}/`,
    );
    console.log(result);
    res.status(200).send({ data: result.data, query_string: query_key, api_query });
  } catch (err) {
    console.log(err);
    // console.log(err);
    res.status(500).send(err);
  }
}
