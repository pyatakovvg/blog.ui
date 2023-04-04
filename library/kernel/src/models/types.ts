
export interface IAuthorDto {
  uuid: string;
  email: string;
  name: string;
}

export interface IArticleDto {
  uuid: string;
  title: string;
  content: string;
  createdAt: string;

  author: IAuthorDto;
}

export interface IUserDto {
  uuid: string;
  name: string;
  email: string;
}
