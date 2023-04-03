
import 'reflect-metadata';
import { describe, test, expect } from '@jest/globals';

import ArticleDto from '@models/ArticleDto';
import ArticleService from '@services//ArticleService';
import AbstractArticleRepository, { IArticleFilter } from '@services/classes/AbstractArticleService';


class ArticleRepository extends AbstractArticleRepository {
  async getAll(filter?: IArticleFilter): Promise<ArticleDto[]> {
    return Promise.resolve([{
      uuid: '111',
      title: 'Описание 1',
      content: 'Контент для описания 1',
      author: {
        uuid: '666666',
        email: 'zemlya@mail.ru',
        name: 'Viktor',
      },
      createdAt: new Date().toString(),
    }].map((item) => new ArticleDto().fromJSON(item)));
  }
  async getByUuid(uuid: string): Promise<ArticleDto> {
    return Promise.resolve(new ArticleDto().fromJSON({
      uuid: '111',
      title: 'Описание 1',
      content: 'Контент для описания 1',
      author: {
        uuid: '666666',
        email: 'zemlya@mail.ru',
        name: 'Viktor',
      },
      createdAt: new Date().toString(),
    }));
  }
}


describe('Инициализация', () => {

  const model = new ArticleService(new ArticleRepository());


  test('Функция getAll() не должна быть undefined', async () => {

    expect(await model.getAll()).not.toBeUndefined();
  });

  test('Тест функции getAll. Вернуть один объект', async () => {

    expect(await model.getAll()).toHaveLength(1);
  });
});

