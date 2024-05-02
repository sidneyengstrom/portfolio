import Computer from './Computer';
import Window from './Window';
import DateTime from './DateTime';

function LandingDecoration() {
    return (
        <div className="art-wrapper" role="presentation">
            <Window />
            <Computer />
            <DateTime />
        </div>
    )
}
export default LandingDecoration