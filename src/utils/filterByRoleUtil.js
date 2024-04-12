export const filterByRole = (data, loggedInRole, quicklink) => {
  let tempArray = [];
  tempArray = data
    ?.filter((item) => {
      return item?.role?.includes(loggedInRole);
    })
    .map((item) => {
      if (item?.children) {
        let childArr = filterByRole(item?.children, loggedInRole);
        let quickLink = quicklink(item.element);
        return {
          ...item,
          element: quickLink,
          children: childArr,
        };
      } else {
        return item;
      }
    });
  return tempArray ?? [];
};
