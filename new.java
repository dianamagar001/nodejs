class box{
    int height, width, length;
    void volume(){
        System.out.println("volume:" + height*width*length);
    }
 }


public class d1 {
    public static void main(String[] args) {
     box b1 = new box();
     b1.height =10;
     b1.width=20;
     b1.length = 30;

     b1.volume();         
    }
    
}