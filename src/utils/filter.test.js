import { applyFilter } from "./filter";

const data = [
  {
    type: "Vocation",
    startDate: "2022-08-09",
    endDate: "2022-08-12",
  },
  {
    type: "Vocation",
    startDate: "2022-03-09",
    endDate: "2022-08-14",
  },
  {
    type: "Somthing else",
    startDate: "2022-08-05",
    endDate: "2022-08-23",
  },
  {
    type: "work",
    startDate: "2022-08-09",
    endDate: "2022-08-09",
  },
];
describe("filter absences list:", () => {
  test("return without apply any filter", async () => {
    const filtered = await applyFilter(
      {
        type: "All",
        endDate: null,
        startDate: null,
      },
      data
    );
    expect(filtered).toEqual(data);
  });
  test("return anly vocation type", async () => {
    const filtered = await applyFilter(
      {
        type: "Vocation",
        endDate: null,
        startDate: null,
      },
      data
    );
    expect(filtered).toEqual([
      {
        type: "Vocation",
        startDate: "2022-08-09",
        endDate: "2022-08-12",
      },
      {
        type: "Vocation",
        startDate: "2022-03-09",
        endDate: "2022-08-14",
      },
    ]);
  });
  test("return anly 2022-08-09 starDate", async () => {
    const filtered = await applyFilter(
      {
        type: "All",
        startDate: "2022-08-09",
        endDate: null,
      },
      data
    );
    expect(filtered).toEqual([
      { type: "Vocation", startDate: "2022-08-09", endDate: "2022-08-12" },
      { type: "work", startDate: "2022-08-09", endDate: "2022-08-09" },
    ]);
  });
});
