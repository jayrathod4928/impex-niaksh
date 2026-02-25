import PremiumHeader from "@/components/PremiumHeader/PremiumHeader";
import ContentShowcase from "@/components/ContentShowcase/ContentShowcase";
import ProductGrid from "@/components/Common/ProductGrid";
import {bedProducts,cottonProducts,varietyProducts,towelProducts} from "@/app/products/garments/mock";

const garmentsPoints = [
    "A person spends around one-third of their life in bed, and making that third as comfortable as possible has a " +
    "lot to do with their choice of bed sheet. Having a great mattress, or your ideal duvet and pillows " +
    "can be negatively affected if the sheets you’re covering them with are wrong. But the variety of different options," +
    " from material to weave to thread count, can make the bed sheet buying process seem insurmountably complicated. " +
    "Cotton, polyester, fiber, Egyptian cotton, lined, silk, modale, Tentacle etc. " +
    "various types of material available in the market. Polyester fibers were developed in the mid-20th century. " +
    "It’s a synthetic polymer fiber and is totally man made. Linen is made from the flax plant. It’s an ancient fabric," +
    " and was even used to wrap Egyptian mummies. Egyptian or Pima cotton are both a more luxurious type of cotton." +
    " Cotton is a very popular choice when it comes to bed sheets, and has been used for at least 7000 years. " +
    "It’s made from a fluffy fiber grown on the cotton plant.",
];
const towelPoints = [
    "A towel is a piece of absorbent fabric or paper used for drying or wiping a body or a surface. It draws moisture through direct contact, often using a blotting or a rubbing motion. In households, several types of fabric towels are used, including hand towels, bath towels and kitchen towels. Bath Towels for drying your body, Beach Towels when you are going to a beach, you can use Tea Towels for drying your hands, as a napkin, Kitchen Towel is for drying up Spills, liquids, cleaning and drying dishes. Hand Towels is a small towel used for drying your hands. Face Towel is a small square about the width of a hand used to clean your face.",
];
const jeansPoints = [
    "It’s hard to imagine a world without jeans. But, less than 50 years ago denim was not the wardrobe staple it is today. Aside from the physical benefits of wearing a great pair of jeans, there are many reasons this item clothing is more popular than any other. Jeans make feel very sensual. Convenience, comfort, versatile, feel casual and relaxed, easy maintenance, fun to wear, long lasting, and a host of other similar benefits are provided by wearing jeans. Jeans are marked with labels like skinny, slim or straight – these are an indication of the body type the jeans are designed for.",
];
const cottonPoints = [
    "Cotton is a natural product and because of the way it is designed and manufactured into clothing, it has many advantages, such as its ability to control moisture, insulate, provide comfort and it is also hypoallergenic, weatherproof and is a durable fabric cotton is known for its cooling properties. Wear a cotton shirt on a warm day and your skin will still be able to breath and keep cool. A cotton shirt will also take moisture away from the skin, which is another factor in keeping you cool and dry in the summer months or when the heat is on (in more ways than one) at work. Similarly, cotton is a natural insulator and so as well as being a breathable fabric that will keep you feeling cooler, it can also keep you warmer when worn as an under-layer, more so than most other synthetic fabrics out there. A cotton   T-shirt will take the moisture away from skin, which is another factor in keeping you cool and dry feeling in the summer months or when you are sweating it out. … Cotton is a durable fabric and is ideal for T-shirts that need to withstand regular washing.",
    ];



export default function KeyPersonPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* The dramatic entrance header */}
            <PremiumHeader
                subtitle=" "
                title="Garments"
                accentColor="#c5a059"
            />
            <ContentShowcase
            title="About Bed sheet Products"
            points={garmentsPoints}
            imageSrc="https://oesexportimport.com/wp-content/uploads/2020/07/Bed-sheet.jpg"
            imageAlt="Assorted tropical and seasonal fruits from India"
            reverse={false}
        />
            {/* Product Listing Section */}
            <ProductGrid
                sectionTitle="Bed Sheet Products"
                data={bedProducts}
            />
            <ContentShowcase
                title="About Of Towel Products"
                points={towelPoints}
                imageSrc="https://oesexportimport.com/wp-content/uploads/2020/07/Towels.jpg"
                imageAlt="Assorted tropical and seasonal fruits from India"
                reverse={false}
            />
            <ProductGrid
                sectionTitle="Towel Products"
                data={towelProducts}
            />
            <ContentShowcase
                title="About Jeans Products"
                points={jeansPoints}
                imageSrc="https://oesexportimport.com/wp-content/uploads/2020/07/Jeans.jpg"
                imageAlt="Assorted tropical and seasonal fruits from India"
                reverse={false}
            />
            <ProductGrid
                sectionTitle="Variety Of Jeans"
                data={varietyProducts}
            />
            <ContentShowcase
                title="About Cotton Products"
                points={cottonPoints}
                imageSrc="https://oesexportimport.com/wp-content/uploads/2020/07/Cotton-Items.jpg"
                imageAlt="Assorted tropical and seasonal fruits from India"
                reverse={false}
            />
            <ProductGrid
                sectionTitle="Cotton Products"
                data={cottonProducts}
            />

        </main>
    );
}