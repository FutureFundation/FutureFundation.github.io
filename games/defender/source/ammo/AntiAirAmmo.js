/**
 * The Anti-Air Ammo Class
 * @extends {Ammo}
 */
class AntiAirAmmo extends Ammo {

    /**
     * The Anti-Air Ammo constructor
     * @param {Tower} tower
     * @param {Array} targets
     * @param {Number} boardSize
     * @param {Number} index
     */
    constructor(tower, targets, boardSize, index) {
        super();

        this.center      = 5;
        this.rotateTower = false;
        this.rotateAmmo  = true;
        this.className   = "airAmmo";
        this.content     = `<div class="airMissile1"></div>`;

        this.init(tower, targets, boardSize);
        this.setMissile(index);
    }

    /**
     * Moves the ammo according to the given time. Returns true if it reached the target
     * @param {Number} time
     * @returns {Boolean}
     */
    move(time) {
        this.changeAngle();
        this.changePos(time);

        if (this.decTimer(time)) {
            this.tower.toggleMissile(this.missile);
            this.destroy();
            return true;
        }
        return false;
    }
}
