export function groceriesDataAdapter(data: IGrocery[]) {
  return data.map(({ id, name }) => ({
    id: id.toString(),
    title: name,
    url: `/groceries/${id}`,
  }));
}
