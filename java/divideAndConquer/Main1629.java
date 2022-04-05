import java.io.*;
import java.lang.*;
import java.util.*;

public class Main1629 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int A = Integer.parseInt(st.nextToken());
        int B = Integer.parseInt(st.nextToken());
        int C = Integer.parseInt(st.nextToken());

        System.out.println(calc(A, B, C));
    }

    static long calc(int a, int b, int c) {
        if (b == 0)
            return 1;

        long n = calc(a, b / 2, c);
        if (b % 2 == 0)
            return n * n % c;
        else
            return n * n % c * a % c;
    }
}
