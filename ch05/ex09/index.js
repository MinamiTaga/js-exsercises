export const parser = (str) => {
  let result = {};
  try {
    let data = JSON.parse(str);
    result['success'] = true;
    result['data'] = data;
  } catch (e) {
    result['success'] = false;
    result['error'] = e;
  } finally {
    return result;
  }
}
