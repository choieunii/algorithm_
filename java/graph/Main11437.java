package graph;

import java.io.*;
import java.lang.*;
import java.util.*;

public class Main11437 {
    static List<List<Integer>> tree = new ArrayList<>();
    static int[] parent;
    static int[] depth;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        parent = new int[N + 1];
        depth = new int[N + 1];

        for (int i = 0; i <= N; i++) {
            tree.add(new ArrayList<>());
        }

        for (int i = 0; i < N - 1; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            tree.get(a).add(b);
            tree.get(b).add(a);
        }
        dfs(1, 1);

        int M = Integer.parseInt(br.readLine());
        for (int i = 0; i < M; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());

            System.out.println(lca(a, b));
        }

    }

    static void dfs(int node, int cnt) {
        depth[node] = cnt;

        int len = tree.get(node).size();

        for (int i = 0; i < len; i++) {
            int next = tree.get(node).get(i);
            if (depth[next] == 0) {
                dfs(next, cnt + 1);
                parent[next] = node;
            }
        }
    }

    static int lca(int a, int b) {
        while (depth[a] > depth[b]) {
            a = parent[a];
        }

        while (depth[b] > depth[a]) {
            b = parent[b];
        }

        while (a != b) {
            a = parent[a];
            b = parent[b];
        }
        return a;
    }
}
