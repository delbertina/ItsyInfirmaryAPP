"use server";

export async function GetSupplyItemList() {
  "use server";
  const response = fetch("http://localhost:3000/SupplyItemList/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return (await response).json;
}
