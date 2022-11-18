export class CatGender {
  MALE = 'MALE';
  FEMALE = 'FEMALE';
}

export class CatDto {
  name: string;
  age: number;
  gender: CatGender;
}
