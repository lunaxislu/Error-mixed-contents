import axios from 'axios';
/**
 * @explain 동물 병원& 약국은 각 지역구 마다 api 호출할 수 있습니다.
 * @example 동물약국 api
 * http://openapi.seoul.go.kr:8088/(인증키)/json/LOCALDATA_020302_${지역구}/1/1000/01
 * @example 동물 병원 api
 * http://openapi.seoul.go.kr:8088/(인증키)/json/LOCALDATA_020301_${지역구}/1/5/
 *
 * 중구 : JG
 * 양천구 : YC
 * 광진구 :GJ
 * 강동구 : GD
 * 종로구 : JN
 * 성동구 : SD
 * 중랑구 : JR
 * 금천구 : GC
 * 강서구 : GS
 * 영등포구 : YD
 * 용산구 : YS
 * 동대문구 : DD
 * 동작구 : DJ
 * 강북구 : GB
 * 노원구 : NW
 * 송파구 : SP
 * 서초구 : SC
 * 서대문구 : SM
 * 마포구 : MP
 * 도봉구 : DB
 * 은평구 : EP
 * 성북구 : SB
 * 관악구 : GA
 * 구로구 : GR
 * 강남구 : GN
 */
/**
 * @param LOCALDATA_020301_${api_query}/01/endPoint
 */

const animalHospitalAPI = axios.create({
  baseURL: `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_ANIMAL_HOSPITAL}/json/`,
});

/**
 * @param LOCALDATA_020302_${api_query}/01/endPoint
 */
const animalPharamcyAPI = axios.create({
  baseURL: `http://openapi.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_ANIMAL_PHARAMCY}/json/`,
});

/**
 * @explain 서울시 주요 산책로 api
 * @example http://openAPI.seoul.go.kr:8088/process.env.NEXT_PUBLIC_SEOUL_PARK/json/SearchParkInfoService/1/132/
 * 132개의 데이터가 들어 있습니다.
 * 지역구별로 정리하려면 따로 데이터 가공 해야합니다.
 *
 * @param SearchParkInfoService/1/135/
 */
export const searchSeoulParkInfo = axios.create({
  baseURL: `http://openAPI.seoul.go.kr:8088/${process.env.NEXT_PUBLIC_SEOUL_PARK}/json/`,
});

/**
 * fn은 react-query의 queryfn 함수이고 query_key는 각 동물병원, 동물약국으로 보낼 필요 query 입니다.
 */
export const api_queries = [
  { api_name: 'animal-hospital', fn: animalHospitalAPI, query_key: 'LOCALDATA_020301_' },
  { api_name: 'animal-pharmacy', fn: animalPharamcyAPI, query_key: 'LOCALDATA_020302_' },
];
/**
 *
 * @param api_query react-query에서 enabled와 지역구 query로 활용하는 인자 값입니다.
 * @returns
 */
export const ParalledQueriesAnimalMedicineAPI = async (api_query: string | null) => {
  try {
    const results = await axios.post(`${process.env.NEXT_PUBLIC_SEOUL_API_URL}`, { api_query });
    return results.data;
  } catch (err) {
    console.log(err, 'map Error');
    return []; // 성공 실패시 균일하게 해주기 위해서
  }
};
