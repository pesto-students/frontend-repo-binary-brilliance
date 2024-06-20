import Heading from "@/core/frontend/components/headings/Heading";
import Section from "@/core/frontend/components/sections/Section";

const stats = [
    { title: 'Events', number: '5+', bgColor: 'bg-blue-200' },
    { title: 'NGOs', number: '100+', bgColor: 'bg-customRed' },
    { title: 'Volunteers', number: '500+', bgColor: 'bg-customYellow' },
    { title: 'Corporates', number: '10+', bgColor: 'bg-customBlue' },
    { title: 'Beneficiaries', number: '15,000+', bgColor: 'bg-orange-400' },
    { title: 'Donation Raised', number: '1,00,000+', bgColor: 'bg-pink-300' },
];

const ImpactCard = ({ title, number, bgColor }) => {
    return (
        <div className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-md ${bgColor}`}>
            <div className="text-white text-2xl mb-2">{title}</div>
            <div className="text-white text-5xl font-bold">{number}</div>
        </div>
    );
};

const ImpactSection = () => {
    return (
        <Section layout={'vertical'} horizontalPositionOfChildren='center'>
            <Heading labelConfig={{ blue: 'Our Impact', black: 'in just 6 months', isBlueFirst: true }}/>
            <div className="flex flex-wrap -mx-4">
                {stats.map((stat, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                        <ImpactCard {...stat} />
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default ImpactSection;