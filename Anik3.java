import java.util.*;
public class selectionsort_anik
{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter number of elements in  array");
        int n=sc.nextInt();
        int sorting[]=new int[n];
        for(int i=0;i<n     ;i++)
        {
            System.out.println("Enter number at "+i+" of the array");
            sorting[i]=sc.nextInt();
        }

        sort(sorting);
        System.out.println("Sorted list is:-");
        
        for (int i=0; i<sorting.length; i++)
        { 
            if(i!=sorting.length-1)
            {
                System.out.println(sorting[i]+",");
            }
            else
            { 
                System.out.println(sorting[i]);
            }
        }
    }

    public static void sort(int arr[]) {
        sort(arr, 0, arr.length - 1);

    }

    public static void sort(int arr[], int L, int H) {
        if (L < H) {    
            int indexOfMin = L;
            int min = arr[L];
            for (int i = L + 1; i <= H; i++) {
                if (arr[i] < min) {
                    min = arr[i];
                    indexOfMin = i;
                }
            }
            arr[indexOfMin] = arr[L];
            arr[L] = min;
            sort(arr, L + 1, H);
        }
    }
}

        /*Sample Execution-
Enter number of elements in Numeric Array
5
Please enter number at position no. 0 of the array
3
Please enter number at position no. 1 of the array
9
Please enter number at position no. 2 of the array
0
Please enter number at position no. 3 of the array
2
Please enter number at position no. 4 of the array
5
Sorted list is:-
0,2,3,5,9
 */
