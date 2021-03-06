/**
 * The Snap Ammo Class
 * @extends {Ammo}
 */
class SnapAmmo extends Ammo {

    /**
     * The Snap Ammo constructor
     * @param {Tower} tower
     * @param {Array} targets
     * @param {Number} boardSize
     */
    constructor(tower, targets, boardSize) {
        super();

        this.center      = 0;
        this.rotateTower = false;
        this.rotateAmmo  = true;
        this.className   = "snapAmmo";

        this.init(tower, targets, boardSize);
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
            this.tower.decAmmo();
            this.destroy();
            return true;
        }
        return false;
    }
}
