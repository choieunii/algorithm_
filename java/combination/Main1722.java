package combination;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main1722 {
    static boolean[] visited;
    static List<List<Integer>> list = new ArrayList<>();
    static int count = 0;
    static int k;
    static int[] arr;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        visited = new boolean[N + 1];
        arr = new int[N + 1];

        int type = Integer.parseInt(st.nextToken());

        if (type == 1) {
            k = Integer.parseInt(st.nextToken());
        } else {
            for (int i = 0; i < N; i++) {
                arr[i] = Integer.parseInt(st.nextToken());
            }
        }
        permutaion(new LinkedList<>(), N, N, type);

    }

    static void permutaion(LinkedList<Integer> output, int n, int r, int type) {
        if (output.size() == r) {
            count++;

            if (type == 1 && count == k) {
                for (int i : output) {
                    System.out.print(i + " ");
                }
            } else if (type == 2) {
                boolean flag = false;

                for (int i = 0; i < n; i++) {
                    if (arr[i] != output.get(i)) {
                        flag = true;
                        break;
                    }
                }

                if (!flag)
                    System.out.print(count);
            }
        }

        for (int i = 1; i <= n; i++) {
            if (visited[i])
                continue;
            visited[i] = true;
            output.add(i);
            permutaion(output, n, r, type);
            output.removeLast();
            visited[i] = false;
        }
        return;
    }
}
