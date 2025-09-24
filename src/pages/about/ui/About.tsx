import { memo } from "react";
import img from "@/shared/assets/Group 1.png"
import img2 from "@/shared/assets/Rectangle 5.png"
export const About = memo(() => {
  return (
    <div className="container mx-auto">
      <div className="bg-[#EAF1EB] h-28 text-center py-2">
        <h1 className="text-3xl font-bold">
          <strong> Who we are and what we do</strong>
        </h1>
        <p>
          Here you can find a lot of interesting and useful information that you
          need in gardening and creating a beautiful garden
        </p>
      </div>


      <div className="flex gap-5">
        <div className="py-5">
          <h1 className="text-2xl">
            <strong>Seedra helps to grow fast and efficiant</strong>
          </h1>
          <p className="my-2">
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
            professional instructions created by PhD Helga George <br /> Be sure of our
            quality - the freshest batches of this season. Non-GMO, Heirloom -
            our seeds were tested and have the best germination ratings.
            <br />  Your
            easy growing experience is our guarantee <br /> Spinach commom culinary
            uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and
            more <br /> <br />  Proudly sourced in the USA - our garden seeds are grown,
            harvested, and packaged in the USA. We support local farmers and are
            happy to produce this American-made product
          </p>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>

      <div className="flex gap-5">
        <div>
          <img src={img2} alt="" />
        </div>
        <div className="py-5">
          <h1 className="text-2xl">
            <strong>Seedra helps to grow fast and efficiant</strong>
          </h1>
          <p className="my-3">
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
            professional instructions created by PhD Helga George <br /> Be sure of our
            quality - the freshest batches of this season. Non-GMO, Heirloom -
            our seeds were tested and have the best germination ratings.
            <br />  Your
            easy growing experience is our guarantee <br /> Spinach commom culinary
            uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and
            more <br /> <br />  Proudly sourced in the USA - our garden seeds are grown,
            harvested, and packaged in the USA. We support local farmers and are
            happy to produce this American-made product
          </p>
        </div>
      </div>
    </div>
  );
});
