
function ProductsLoading() {
  return (
    <div className="overal-products mb-4 lg:mb-8">
      {Array(8).fill(1).map((_, index) =>
        <div className="bg-white rounded-2xl shadow-md p-4 animate-pulse w-full" key={index}>
          {/* Container for responsive layout */}
          <div className="flex flex-row products-loading-container gap-4">

            {/* جای عکس */}
            <div className="relative overflow-hidden rounded-md flex-shrink-0">
              <div className="bg-gray-300 h-24 w-24 products-loading-img rounded-md">
                {/* انیمیشن مورب از چپ به راست */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white to-transparent animate-[shimmer_1.5s_infinite]"></div>
              </div>
            </div>

            {/* متن‌ها */}
            <div className="flex-1 space-y-3.5">
              {/* متن اول (کوتاه) */}
              <div className="h-4 bg-gray-300 rounded w-3/4 relative overflow-hidden">
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white to-transparent animate-[shimmer_1.5s_infinite]"></div>
              </div>

              {/* متن دوم (بلندتر) */}
              <div className="mr-auto h-4 bg-gray-300 rounded w-[55%] relative overflow-hidden">
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white to-transparent animate-[shimmer_1.5s_infinite]"></div>
              </div>

              {/* ادامه متن دوم */}
              <div className="h-4 bg-gray-300 rounded w-1/3 relative overflow-hidden">
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white to-transparent animate-[shimmer_1.5s_infinite]"></div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default ProductsLoading




// const test = () => {
//   return (
//     <>
//       <!-- تک المنت Skeleton که داخل loop می‌ندازید -->
//       <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
//         <!-- جای عکس -->
//         <div className="relative overflow-hidden rounded-md mb-3">
//           <div className="bg-gray-300 h-48 w-full rounded-md">
//             <!-- انیمیشن مورب از چپ به راست -->
//             <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white to-transparent animate-[shimmer_1.5s_infinite]"></div>
//           </div>
//         </div>

//         <!-- متن اول (کوتاه) -->
//         <div className="h-4 bg-gray-300 rounded w-3/4 mb-2 relative overflow-hidden">
//           <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white to-transparent animate-[shimmer_1.5s_infinite]"></div>
//         </div>

//         <!-- متن دوم (بلندتر) -->
//         <div className="h-4 bg-gray-300 rounded w-full mb-1 relative overflow-hidden">
//           <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white to-transparent animate-[shimmer_1.5s_infinite]"></div>
//         </div>

//         <!-- ادامه متن دوم -->
//         <div className="h-4 bg-gray-300 rounded w-5/6 relative overflow-hidden">
//           <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white to-transparent animate-[shimmer_1.5s_infinite]"></div>
//         </div>
//       </div>
//     </>
//   )
// }