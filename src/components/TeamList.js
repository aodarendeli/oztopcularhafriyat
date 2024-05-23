import Title from "./Title"
import TeamItem from "./TeamItem"
import team from './team.json'

const TeamList = () => {
    const title = {
        text: "Hizmetlerimiz",
        description: "Hafriyat Sektöründe Önde Gelen Bir Markayız"
    }
    return (
        <section className="section-teams">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="row">
                    {team && team.map(item => (
                        <TeamItem key={item.id} title={item.title} desc={item.desc} img={item.img} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamList;