import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Fooder } from "../components/Fooder";
const Detail = ({ article }) => {

 
    return (
        <>
            <Navbar />
            {/* <div className='flex justify-center items-center pt-24 pb-20'>
                <div className='flex justify-center itmes-center w-[800px] flex-col'>
                    <h1 className="font-semibold text-4xl pb-5">The Impact of Technology on the Workplace: How Technology is Changing</h1>
                    <div className='flex  items-center'>
                        <img className='w-9 h-9 rounded-full ' src={article.user.profile_image ? article.user.profile_image : ("https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif")} alt="" />
                        <p className='pl-3 pr-5 font-normal text-base text-[#97989F]'>{article.user.name}</p>
                        <p className='font-normal text-base text-[#97989F]'>{article.readable_publish_date} 2022</p>
                    </div>
                    <img className='rounded-xl h-[462px] w-[800px] mb-4 my-8' src={article.cover_image ? article.cover_image : ("https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg")} alt="" />
                    
                </div>
            </div> */}
            <p>hi</p>
            <Fooder/>
        </>
    );
 
};
 
// export async function getStaticPaths() {
//     const response = await fetch("https://dev.to/api/articles");
//     const data = await response.json();
//     const paths = data.map((article) => ({
//         params: { id: article.id.toString() },
//     }));
 
//     return {
//         paths,
//         fallback: false
//     }
// }
 
// export async function getStaticProps({ params }) {
//     const response = await fetch("https://dev.to/api/articles");
//     const data = await response.json();
//     console.log("params", params);
//     const article = data.find((article) => article.id === parseInt(params.id, 10));
 
//     console.log("article", article);
 
//     return {
//         props: {
//             article
//         }
//     }
// }
 
export default Detail;