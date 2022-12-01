import '../../Filter/Filter.css'


const sizes = ['Filter by size', 'Any size','Small', 'Medium', 'Big', 'Huge'];
function FilterSize() {
    return (
        <select className="select">
            {
                sizes.map((size)=> <option key={size} value={size}>{size}</option>)
            }
        </select>
    );
}

export default FilterSize;