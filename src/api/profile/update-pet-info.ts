import { axiosValid_API } from '../common/axios_instance';

interface I_petUpdateInfo {
  petId: string | number;
  updateValue: {
    age: string;
    birth: string;
    breed: string;
    gender: string;
    name: string;
    profileImage: File | null;
  };
}
export const updatePetInfo = async (petUpdateInfo: I_petUpdateInfo) => {
  try {
    const { petId, updateValue } = petUpdateInfo;
    const res = await axiosValid_API.put(`pet/${petId}`, updateValue);

    return res;
  } catch (error) {
    console.error(error);
  }
};
