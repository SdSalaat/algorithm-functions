function maxStockProfit (pricesArr) {
    var maxProfit = -1,
     changeBuyPrice = true,
     buyPrice = 0,
     sellPrice = 0;
    
    for (var i = 0; i < pricesArr.length; i++) {
      if (changeBuyPrice) buyPrice = pricesArr[i];
      sellPrice = pricesArr[i + 1];
      
      if (sellPrice < buyPrice) {
        changeBuyPrice = true;
      }
      else {
        var tempProfit = sellPrice - buyPrice;
        if (tempProfit > maxProfit) maxProfit = tempProfit;
        changeBuyPrice = false;
      }
    }
    
    return maxProfit;
  }
  
  maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]);