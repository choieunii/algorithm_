package algorithm;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main1929 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int M = Integer.parseInt(st.nextToken());
        int N = Integer.parseInt(st.nextToken());
        int[] A = new int[N + 1];

        for (int i = 2; i <= N; i++) {
            A[i] = i;
        } // 초기화

        for (int i = 2; i <= Math.sqrt(N); i++) { // 2부터 N의 제곱근까지
            if (A[i] == 0) {
                continue;
            } // 배수이면 0들어있을 예정

            for (int j = i + i; j <= N; j = j + i) {
                A[j] = 0;
            } // 배수 지우기
        }

        for (int i = M; i <= N; i++) {
            if (A[i] != 0) {
                System.out.println(A[i]);
            } // 지워지지 않은 경우만 출력
        }
    }
}
