import '../../Filter/Filter.css'

const locations = ['Filter by location', 'Any size', 'Lviv', 'Kyiv', 'Kharkiv', 'Odessa']
function FilterLocation() {
    return (
        <select>
            {
                locations.map((location)=> <option key={location} value={location}>{location}</option>)
            }
        </select>
    );
} 

export default FilterLocation;