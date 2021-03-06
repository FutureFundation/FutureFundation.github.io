/**
 * The Group Mob Class
 * @extends {Mob}
 */
class GroupMob extends Mob {

    /**
     * The Group Mob constructor
     * @param {Object} data
     */
    constructor(data) {
        super();

        this.name      = "Group";
        this.slogan    = "We are many";
        this.text      = "A mob that appears close to each other.";
        this.color     = "rgb(138, 152, 239)";

        this.interval  = 100;
        this.amount    = 10;
        this.bosses    = 2;
        this.lifeMult  = 1;
        this.baseSpeed = 1;
        this.money     = 1;
        this.defense   = 0;
        this.content   = `<div class="groupMob"></div>`;

        this.init(data);
    }
}
