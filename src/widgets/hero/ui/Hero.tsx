import { memo } from "react";
import { AiFillFire } from "react-icons/ai";
import product from "@/shared/assets/image 2.png"
import pic from "@/shared/assets/close-up-fresh-green-basil-herb-leaves-isolated-white-background 1.png"
import { Categories } from "@/widgets/categories";
import hero from "@/shared/assets/Group 2.png"
export const Hero = memo(() => {
  return (
    <div className="container mx-auto">
      <div className="bg-[#EAF1EB] h-80 rounded-2xl my-3">
        <div className="flex">
          <div className="p-10">
            <h1 className="text-3xl my-3">SEEDRA Basil Seeds for Indoor and Outdoor Planting</h1>
            <p className="my-3">Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee</p>
            <div className="flex my-3">
        <AiFillFire className="text-[#E55C5C] text-3xl mr-3" />
            <p className="font-bold text-2xl"><strong>$12.56</strong></p>
            <p className="text-2xl mx-3"><del>$15.56</del></p>
            </div>
            <div className="flex gap-3">
                <button className=" rounded-md px-3 bg-[#359740] text-white ">Add to card</button>
                <button className=" rounded-md  px-3 bg-white text-[#359740]  ">Discover</button>
            </div>
          </div>
          <div className="relative">
            <img className="absolute" src={product} alt="" />
            <img className="pt-[120px]" src={pic} alt="" />
          </div>
        </div>
      </div>
      <div className="text-center rounded-md py-2 relative">
        <img className="w-full h-full bg-amber-50" src={hero} alt="" />
        <h1 className="absolute top-8 left-[45%] text-xl "><strong>We sell seeds</strong></h1>
        <p className="absolute bottom-10 left-[30%] ">that always sprout and gardening supplies which never break</p>
      </div>
      <Categories/>
    </div>
  );
});
