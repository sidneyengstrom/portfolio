import Computer from './Computer';
import Window from './Window';
import DateTime from './DateTime';

function LandingDecoration() {
    return (
        <div class="art-wrapper" role="presentation" aria-roledescription="presentation">
            <Computer />
            <Window />
            <DateTime />
        </div>
    )
}
export default LandingDecoration