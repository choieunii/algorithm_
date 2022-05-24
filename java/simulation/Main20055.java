package simulation;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main20055 {
    static int N, K;
    static int[] arr;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        K = Integer.parseInt(st.nextToken());
        arr = new int[2 * N];
        st = new StringTokenizer(br.readLine());

        for (int i = 0; i < 2 * N; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
        }

    }

    static void rotateBelt() {
        int temp = arr[0];

        for (int i = 0; i < N; i++) {
            arr[i] = arr[(i - 1) % N];
        }

    }

    static boolean checkFinish() {
        int cnt = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == 0) {
                cnt++;
            }
            if (cnt >= K) {
                return false;
            }
        }
        return true;
    }
}
