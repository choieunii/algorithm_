import java.io.*;
import java.lang.*;
import java.util.*;

public class Main11437_LCA {
    static ArrayList<Integer>[] tree;
    static int[] depth;
    static int[] parent;
    static boolean[] visited;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        tree = new ArrayList[N + 1];

        for (int i = 1; i <= N; i++) {
            tree[i] = new ArrayList<Integer>();
        }

        for (int i = 0; i < N - 1; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int s = Integer.parseInt(st.nextToken());
            int e = Integer.parseInt(st.nextToken());
            tree[s].add(e);
            tree[e].add(s);
        }

        depth = new int[N + 1];
        parent = new int[N + 1];
        visited = new boolean[N + 1];
        BFS(1);
        int M = Integer.parseInt(br.readLine());

        for (int i = 0; i < M; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());
            int LCA = excuteLCA(a, b);
            System.out.println(LCA);
        }
    }

    static int excuteLCA(int a, int b) {
        if (depth[a] < depth[b]) {
            int temp = a;
            a = b;
            b = temp;
        }

        while (depth[a] != depth[b]) {
            a = parent[a];
        }

        while (a != b) {
            a = parent[a];
            b = parent[b];
        }
        return a;
    }

    private static void BFS(int node) {
        Queue<Integer> queue = new LinkedList<Integer>();
        queue.add(node);
        visited[node] = true;
        int level = 1;
        int now_size = 1;
        int count = 0;
        while (!queue.isEmpty()) {
            int now_node = queue.poll();

            for (int next : tree[now_node]) {
                if (visited[next])
                    continue;
                visited[next] = true;
                queue.add(next);
                parent[next] = now_node;
                depth[next] = level;
            }

            count++;
            if (count == now_size) {
                count = 0;
                now_size = queue.size();
                level++;
            }
        }
    }
}
