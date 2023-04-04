
import 'reflect-metadata';
import { describe, test, expect } from '@jest/globals';

import ArticleDto from '@models/classes/ArticleDto';
import ArticleService from '@services/classes/ArticleService';

import { IArticleRepository } from '@repositories/types';


class ArticleRepository implements IArticleRepository {
  async getAll<T extends object>(filter?: T): Promise<ArticleDto[]> {
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

  const model = new ArticleService();

  test('Функция getAll() не должна быть undefined', async () => {

    expect(await model.getAll()).not.toBeUndefined();
  });

  test('Тест функции getAll. Вернуть один объект', async () => {

    expect(await model.getAll()).toHaveLength(1);
  });
});

