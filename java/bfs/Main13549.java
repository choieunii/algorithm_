package bfs;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main13549 {
    static int N, K;

    static void bfs() {
        boolean[] visited = new boolean[100001];
        PriorityQueue<int[]> q = new PriorityQueue<>((a, b) -> a[1] > b[1] ? 1 : -1);

        q.offer(new int[] { N, 0 });

        while (!q.isEmpty()) {
            int[] cur = q.poll();

            if (visited[cur[0]] == true)
                continue;

            visited[cur[0]] = true;

            if (cur[0] == K) {
                System.out.println(cur[1]);
                break;
            }

            if (cur[0] * 2 <= 100000) {
                q.offer(new int[] { cur[0] * 2, cur[1] });
            }
            if (cur[0] - 1 >= 0) {
                q.offer(new int[] { cur[0] - 1, cur[1] + 1 });
            }
            if (cur[0] + 1 <= 100000) {
                q.offer(new int[] { cur[0] + 1, cur[1] + 1 });
            }
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        K = Integer.parseInt(st.nextToken());

        bfs();
    }
}
