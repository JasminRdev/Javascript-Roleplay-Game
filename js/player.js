let player; //need to make it global instead of calling it inside a func where we need to call it anyways but then it would be not accessable anywhere cuz then it would be local

function Player (classType, health, mana, strength, agility, speed) {
  this.classType = classType;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
}



let PlayerMoves = {
  calcAttack: function (){
    //who attacks first?
    let getPlayerSpeed = player.speed;
    let getEnemySpeed  = enemy.speed;
    //player attack
    let playerAttack = function() {
      let calcBaseDamage;
      //if mana is there
      if(player.mana > 0){
        calcBaseDamage = player.strength * player.mana / 1000;
      } else {
        calcBaseDamage = player.strength * player.agility / 1000;
      }
    let offsetDamage = Math.floor(Math.random() * Math.floor(10));
    let calcOutputDamage = calcBaseDamage + offsetDamage;
    //number of hits
    let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2)+1; //risk of 0 -> at least hit once
    let attackValues = [calcOutputDamage, numberOfHits];
    return attackValues;
     }

    //enemy attack
     let enemyAttack = function(){
       let calcBaseDamage;
       //if mana is there
       if(enemy.mana > 0){
         calcBaseDamage = enemy.strength * player.mana / 1000;
       } else {
         calcBaseDamage = enemy.strength * player.agility / 1000;
       }
     let offsetDamage = Math.floor(Math.random() * Math.floor(10));
     let calcOutputDamage = calcBaseDamage + offsetDamage;
     //number of hits
     let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2)+1; //risk of 0 -> at least hit once
     let attackValues = [calcOutputDamage, numberOfHits];
     return attackValues;
      }

    //get player/enemy health to change later
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");
    //initiate attacks - depend on speed
    if (getPlayerSpeed >= getEnemySpeed) {
      let playerAttackValues = playerAttack(); //output is array
      let totalDamage = playerAttackValues[0] * playerAttackValues[1];//decrease calc to get new health
      enemy.health = enemy.health - totalDamage;
      alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
    if (enemy.health <= 0) {
      alert ("You win! Refresh browser to play again.");
      getPlayerHealth.innerHTML = 'Health: ' + player.health;
      getEnemyHealth.innerHTML = 'Health: 0';
    } else {
      getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
      //Enemy attack
      let enemyAttackValues = enemyAttack();
      let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];//decrease calc to get new health
      player.health = player.health - totalDamage;
      alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
    if (player.health <= 0) {
      alert ("You loose! Refresh browser to play again.");
      getPlayerHealth.innerHTML = 'Health: 0';
      getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
    } else {
      getPlayerHealth.innerHTML = 'Health: ' + player.health;


    }

    }
    }

    //initiate attacks - depend on speed
    if (getEnemySpeed >= getPlayerSpeed) {
      let enemyAttackValues = enemyAttack(); //output is array
      let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];//decrease calc to get new health
      player.health = player.health - totalDamage;
      alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
    if (player.health <= 0) {
      alert ("You loose! Refresh browser to play again.");
      getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
      getPlayerHealth.innerHTML = 'Health: 0';
    } else {
      getPlayerHealth.innerHTML = 'Health: ' + player.health;
      //Enemy attack
      let playerAttackValues = playerAttack();
      let totalDamage = playerAttackValues[0] * playerAttackValues[1];//decrease calc to get new health
      enemy.health = enemy.health - totalDamage;
      alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
    if (enemy.health <= 0) {
      alert ("You win! Refresh browser to play again.");
      getEnemyHealth.innerHTML = 'Health: 0';
      getPlayerHealth.innerHTML = 'Health: ' + player.health;
    } else {
      getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
    }
    }
    }
  }

}
