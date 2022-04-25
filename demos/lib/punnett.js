class PunnetSquare{
    constructor(genotypes){
        this.genotypes = genotypes;
        this.pairCount = genotypes[0].length / 2;
        this.genotypes[0]+=' ';
        this.genotypes[1]+=' ';
        this.pairList = [[],[]];
        this.gametes = [[],[]];
        for(let i=0;i<2;i++){
            for(let j=0;j<this.pairCount;j++){
               this.pairList[i].push(this.genotypes[i].substring(j*2, (j*2)+2).split(''));
            }
        }
    }
    getGenotype(pair){
        var output = [];
        for(let i=0;i<2;i++){
            for(let j=0;j<2;j++){
                output.push((this.genotypes[0].substring(pair*2, (pair*2)+2)[j]+this.genotypes[1].substring(pair*2, (pair*2)+2)[i]));
            }
        }
        return output;
    }
    generateGenes(__callback){
        var allGenes = [];

        for(let i=0;i<4**this.pairCount;i++){
            var gene = '';
            for(let j=1;j<=this.pairCount;j++){
                var k = Math.floor(i/(4**(this.pairCount-j)));
                gene+=this.getGenotype(j-1)[k-(4*Math.floor(k/4))];
            }
            allGenes.push(gene);
        }
        
        __callback(allGenes);
    }
    generateTable(__callback){
        var table = document.createElement('table');
        for(let m=0;m<2;m++){
            for(let i=0;i<2**this.pairCount;i++){
                var gamete = '';
                for(let j=0;j<this.pairCount;j++){
                    var k = Math.floor(i/(2**(this.pairCount-(j+1))));
                    gamete += this.pairList[m][j][k-(2*Math.floor(k/2))];
                }
                this.gametes[m].push(gamete);
            }
        }
        for(let i=0; i<(2**this.pairCount)+1; i++){
            var row = document.createElement('tr');
            for(let j=0; j<(2**this.pairCount)+1; j++){
                var cell = document.createElement('td');
                if(i==0&&j>0){
                    cell.innerHTML = this.gametes[0][j-1];
                }
                if(j==0&&i>0){
                    cell.innerHTML = this.gametes[1][i-1];
                }
                if(j>0&&i>0){
                    this.generateGenes(genes=>{
                        cell.innerHTML = genes[((2**this.pairCount)*(j-1))+i-1]
                    });
                }
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        __callback(table);
    }
}