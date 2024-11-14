import { jest } from '@jest/globals';
import { getOpenIssues, createIssue, closeIssue } from './index.js';

let spyConsole;
beforeEach(() => {
  spyConsole = jest.spyOn(global.console, 'log').mockImplementation();
});

afterEach(() => {
  spyConsole.mockClear();
});

test('getOpenIssues', async () => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            id: 1234,
            title: 'issue title',
          },
          {
            id: 1235,
            title: 'issue title2',
          },
        ]),
      ok: true,
      status: 200,
      statusText: 'ok',
    })
  );
  await getOpenIssues();

  expect(spyConsole).toHaveBeenCalledTimes(2);
  expect(spyConsole).toHaveBeenCalledWith('#1234: issue title');
  expect(spyConsole).toHaveBeenCalledWith('#1235: issue title2');
});

test('createIssue', async () => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          html_url: 'https://dummy.url',
        }),
      ok: true,
      status: 200,
      statusText: 'ok',
    })
  );
  const title = 'issue title';
  const body = 'issue body';
  await createIssue(title, body);

  expect(spyConsole).toHaveBeenCalledTimes(1);
  expect(spyConsole).toHaveBeenCalledWith(
    'Success to create issue',
    'https://dummy.url'
  );
});

test('closeIssue', async () => {
  global.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          html_url: 'https://dummy.url',
        }),
      ok: true,
      status: 200,
      statusText: 'ok',
    })
  );
  const number = '1234';
  await closeIssue(number);

  expect(spyConsole).toHaveBeenCalledTimes(1);
  expect(spyConsole).toHaveBeenCalledWith(
    'Success to close issue',
    'https://dummy.url'
  );
});
