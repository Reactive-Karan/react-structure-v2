export const filterByRole = (data, loggedInRole) => {
  let tempArray = [];
  tempArray = data
    ?.filter((item) => {
      return item?.role?.includes(loggedInRole);
    })
    .map((item) => {
      if (item?.children) {
        let childArr = filterByRole(item?.children, loggedInRole);
        return {
          ...item,
          children: childArr,
        };
      } else {
        return item;
      }
    });
  return tempArray ?? [];
};
