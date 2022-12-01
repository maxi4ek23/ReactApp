import '../../Filter/Filter.css'


const typesDwelling = ['Filter by type', 'All types','Cottages', 'Villas', 'Apartments', 'Houses'];
function FilterType() {
    return (
        <select className="select">
            {
                typesDwelling.map((type)=> <option key={type} value={type}>{type}</option>)
            }
        </select>
    );
}

export default FilterType;