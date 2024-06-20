import publicImages from "@/core/frontend/publicImages";
import Section from "@/core/frontend/components/sections/Section";
import Heading from "@/core/frontend/components/headings/Heading";

const CorporatePartnerSection = () => {
    return (
        <Section layout='vertical' horizontalPositionOfChildren='center'>
            <Heading labelConfig={{black: 'Our', blue: 'Corporate Partners'}} layout='vertical'/>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                {Object.values(publicImages.CORPORATE_LOGOS).map((imageSrc, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <img src={imageSrc} alt={`Corporate Partner ${index + 1}`} className="max-h-20" />
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default CorporatePartnerSection;