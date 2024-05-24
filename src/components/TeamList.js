import Title from "./Title"
import TeamItem from "./TeamItem"
import team from './team.json'
import { useTranslation } from "react-i18next";

const TeamList = () => {
    const { t } = useTranslation();

    const title = {
        text: t('service'),
        description: t('mark')
    }
    return (
        <section className="section-teams">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="row">
                    <TeamItem title={t('karayolu')} desc={t('karayoludesc')} img={"https://media.istockphoto.com/id/1448405703/photo/convoy-of-industrial-big-rigs-semi-trucks-with-semi-trailers-driving-with-cargo-on-the.webp?b=1&s=612x612&w=0&k=20&c=ed1XSPvotL9vMUcqxcP-GEIIRd1PLV-28BmN9RnIhXo="} />
                    <TeamItem title={t('metro')} desc={t('metrodesc')} img="https://media.istockphoto.com/id/1181249621/photo/electric-passenger-train-drives-at-high-speed-among-urban-landscape.webp?b=1&s=612x612&w=0&k=20&c=RhA56-TRuhZRBqEqHzUHGTyhq88b157yptfthwoXkGg=" />
                    <TeamItem title={t('hava')} desc={t('havadesc')} img="https://cdn.pixabay.com/photo/2020/07/09/14/10/airport-5387490_1280.jpg" />
                </div>
            </div>
        </section>
    )
}

export default TeamList;