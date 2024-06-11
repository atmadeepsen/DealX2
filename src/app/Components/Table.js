import React from "react";
const Table=(mn,cp,lp,v) =>{
    return(
        <>
        <div class="relative overflow-x-auto flex items-center justify-center p-8">
    <table class="w-6xl text-base text-left  text-gray-400  ">
        <thead class="text-xs text-gray-400 uppercase bg-gray-700 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Current Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Lowest Price
                </th>
                <th scope="col" class="px-6 py-3">
                    GoodDeal/BadDeal
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${mn}
                </th>
                <td class="px-6 py-4">
                    ${cp}
                </td>
                <td class="px-6 py-4">
                    ${lp}
                </td>
                <td class="px-6 py-4">
                    ${v}
                </td>
            </tr>
           
        </tbody>
    </table>
</div>

        </>
    )
}
export default Table